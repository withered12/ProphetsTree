import * as d3 from 'd3';
import type { ProphetNode } from '../data/prophets';

export class TreeGraph {
    private container: HTMLElement;
    private svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
    private svgGroup: d3.Selection<SVGGElement, unknown, null, undefined>;
    private zoomBehavior: d3.ZoomBehavior<SVGSVGElement, unknown>;
    private initialTransform: d3.ZoomTransform;

    private margin = { top: 50, right: 90, bottom: 50, left: 90 };
    private nodeSize: [number, number] = [90, 180];

    constructor(containerId: string) {
        const el = document.getElementById(containerId);
        if (!el) throw new Error(`Container #${containerId} not found`);
        this.container = el;

        this.zoomBehavior = d3.zoom<SVGSVGElement, unknown>()
            .scaleExtent([0.1, 3])
            .on('zoom', (event) => {
                this.svgGroup.attr('transform', event.transform);
            });

        // Clear previous content
        this.container.innerHTML = '';

        this.svg = d3.select(this.container).append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .call(this.zoomBehavior)
            .on('dblclick.zoom', null);

        this.svgGroup = this.svg.append('g')
            .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

        this.initialTransform = d3.zoomIdentity;
    }

    public render(data: ProphetNode) {
        const root = d3.hierarchy<ProphetNode>(data, d => d.children);
        const treeLayout = d3.tree<ProphetNode>().nodeSize(this.nodeSize);
        const rootPoint = treeLayout(root);

        // --- Links ---
        this.svgGroup.selectAll('.link')
            .data(rootPoint.links())
            .enter().append('path')
            .attr('class', 'link')
            .attr('d', d3.linkVertical<any, any>()
                .x(d => d.x)
                .y(d => d.y)
            );

        // --- Nodes ---
        const node = this.svgGroup.selectAll('.node')
            .data(rootPoint.descendants())
            .enter().append('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${d.x},${d.y})`)
            .on('click', (event, d) => this.handleNodeClick(event, d));

        // Circle
        node.append('circle')
            .attr('r', 25)
            .attr('class', d => `node-circle type-${d.data.type}`); // Use CSS classes for styling

        // Special ring for Ulu Al-Azm
        node.filter(d => d.data.type === 'ulu-alazm').append('circle')
            .attr('r', 32) // Slightly larger
            .attr('class', 'halo-ring');

        // Text
        node.append('text')
            .attr('dy', 45)
            .attr('text-anchor', 'middle')
            .attr('class', 'node-text')
            .text(d => d.data.name);

        // Initial Zoom Logic
        this.centerTree();
    }

    private handleNodeClick(event: any, d: d3.HierarchyPointNode<ProphetNode>) {
        event.stopPropagation();

        // Dispatch Event for UI
        const customEvent = new CustomEvent('node-selected', { detail: d.data });
        window.dispatchEvent(customEvent);

        // visual feedback (active state)
        this.svgGroup.selectAll('.node-circle').classed('active', false);
        d3.select(event.currentTarget).select('.node-circle').classed('active', true);
    }

    public zoomIn() {
        this.svg.transition().call(this.zoomBehavior.scaleBy, 1.3);
    }

    public zoomOut() {
        this.svg.transition().call(this.zoomBehavior.scaleBy, 1 / 1.3);
    }

    public resetZoom() {
        this.centerTree();
    }

    private centerTree() {
        const initialScale = window.innerWidth < 600 ? 0.6 : 0.8;
        // Approximate center top
        this.initialTransform = d3.zoomIdentity
            .translate(this.container.clientWidth / 2, 80)
            .scale(initialScale);

        this.svg.transition().duration(750).call(this.zoomBehavior.transform, this.initialTransform);
    }

    public focusNode(nodeName: string) {
        const nodeSelection = this.svgGroup.selectAll<SVGGElement, d3.HierarchyPointNode<ProphetNode>>('.node')
            .filter(d => d.data.name === nodeName);

        if (nodeSelection.empty()) return;

        const d = nodeSelection.datum();

        // Highlight
        this.svgGroup.selectAll('.node-circle').classed('active', false);
        nodeSelection.select('.node-circle').classed('active', true);

        // Zoom to node
        const scale = 1.5;
        const x = -d.x * scale + this.container.clientWidth / 2;
        const y = -d.y * scale + this.container.clientHeight / 2;

        const transform = d3.zoomIdentity
            .translate(x, y)
            .scale(scale);

        this.svg.transition().duration(750).call(this.zoomBehavior.transform, transform);
    }
}
