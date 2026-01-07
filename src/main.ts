import { TreeGraph } from './logic/treeGraph';
import { treeData, type ProphetNode } from './data/prophets';
import './styles/style.css';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';
import '@fontsource/amiri/400.css';
import '@fontsource/amiri/700.css';



// Viewport Logic for Mobile resizing (Keyboard/Nav Bar)
const viewport = window.visualViewport;
function resize() {
  if (!viewport) return;
  document.documentElement.style.setProperty('--app-height', `${viewport.height}px`);
  window.scrollTo(0, 0);
}

if (viewport) {
  viewport.addEventListener('resize', resize);
  resize(); // Initial set
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Graph
  const graph = new TreeGraph('app');
  graph.render(treeData);
  // Initial Reset to center/fit tree
  setTimeout(() => graph.resetZoom(), 100);

  // 2. UI Elements
  const bottomSheet = document.getElementById('details-sheet');
  const sheetContent = document.getElementById('sheet-content-body');
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnReset = document.getElementById('btn-reset');
  const backdrop = document.getElementById('sheet-backdrop');

  // Phase 6 Elements
  const btnLegend = document.getElementById('btn-legend');
  const legendDialog = document.getElementById('legend-dialog') as HTMLDialogElement;
  const btnCloseLegend = document.getElementById('btn-close-legend');
  const btnTheme = document.getElementById('btn-theme');
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const searchResults = document.getElementById('search-results');

  // --- Theme Logic ---
  const savedTheme = localStorage.getItem('theme');
  // Default to LIGHT if nothing is saved
  const initialTheme = savedTheme || 'light';

  document.documentElement.setAttribute('data-theme', initialTheme);

  // If dark, set class (legacy logic? or just attribute). CSS uses attribute largely?
  // Theme.css uses @media (prefers-color-scheme: dark), but we need manual override support.
  // Ideally, theme.css should have [data-theme="dark"] support too.
  // Assuming theme.css handles standard vars. If manual override is needed, we need to ensure CSS supports it.

  btnTheme?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // --- Legend Logic ---
  btnLegend?.addEventListener('click', () => legendDialog?.showModal());
  btnCloseLegend?.addEventListener('click', () => legendDialog?.close());
  legendDialog?.addEventListener('click', (e) => {
    if (e.target === legendDialog) legendDialog.close();
  });

  // --- Search Logic ---
  searchInput?.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();
    if (!query) {
      searchResults?.classList.remove('visible');
      searchResults!.innerHTML = '';
      return;
    }

    // Flatten tree and search
    const results: ProphetNode[] = [];
    const traverse = (node: ProphetNode) => {
      if (node.name.toLowerCase().includes(query)) results.push(node);
      if (node.children) node.children.forEach(traverse);
    };
    traverse(treeData);

    // Render results
    searchResults!.innerHTML = '';
    if (results.length > 0) {
      searchResults?.classList.add('visible');
      results.forEach(node => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.textContent = node.name;
        div.addEventListener('click', () => {
          // Locate node logic
          graph.focusNode(node.name); // Need to implement this in TreeGraph
          searchInput.value = '';
          searchResults?.classList.remove('visible');
          // Trigger details
          openSheet(node);
        });
        searchResults?.appendChild(div);
      });
    } else {
      searchResults?.classList.remove('visible');
    }
  });

  // 3. Zoom Controls
  btnZoomIn?.addEventListener('click', () => graph.zoomIn());
  btnZoomOut?.addEventListener('click', () => graph.zoomOut());
  btnReset?.addEventListener('click', () => graph.resetZoom());

  // 4. Bottom Sheet Logic
  function openSheet(data: ProphetNode) {
    if (!bottomSheet || !sheetContent) return;

    // Populate Data
    document.getElementById('sheet-title')!.textContent = data.name;
    document.getElementById('sheet-subtitle')!.textContent = data.title || '';

    const badge = document.getElementById('sheet-badge');
    if (badge) {
      badge.textContent = getTypeLabel(data.type);
      badge.className = `prophet-badge bg-type-${data.type}`;
      badge.style.backgroundColor = `var(--prophet-${data.type})`;
    }

    const timelineEl = document.getElementById('detail-timeline');
    if (timelineEl) timelineEl.textContent = data.timeline || 'غير محدد';

    const relationEl = document.getElementById('detail-relation');
    if (relationEl) relationEl.textContent = data.relation || '';

    const descEl = document.getElementById('detail-desc');
    if (descEl) descEl.textContent = data.desc || '';

    // Show
    bottomSheet.classList.add('open');
    if (backdrop) backdrop.classList.add('visible');
  }

  function closeSheet() {
    bottomSheet?.classList.remove('open');
    backdrop?.classList.remove('visible');

    // Deselect nodes visually is handled by Graph, but distinct logic might be needed
  }

  // Event Listener from Graph
  window.addEventListener('node-selected', (e: any) => {
    const data = e.detail as ProphetNode;
    openSheet(data);
  });

  // Close on backdrop click
  backdrop?.addEventListener('click', closeSheet);
  document.getElementById('btn-close-sheet')?.addEventListener('click', closeSheet);
});

function getTypeLabel(type: string): string {
  const map: Record<string, string> = {
    'ulu-alazm': 'أولو العزم',
    'messenger': 'رسول',
    'prophet': 'نبي',
    'connector': 'شخصية',
    'relative': 'شخصية مرتبطة'
  };
  return map[type] || type;
}
