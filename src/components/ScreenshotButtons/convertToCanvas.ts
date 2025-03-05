import html2canvas from '@cantoo/html2canvas';

export default async function convertToCanvas() {
    return html2canvas(
        document.querySelector('[data-edition-table]')!
            .parentElement as HTMLElement,
        {
            ignoreElements: (element) =>
                element.children?.item(0)?.className ===
                    'full-cell-button' ||
                element.children?.item(0)?.className === 'table-padding',
            scale: Math.max(window.devicePixelRatio, 1),
            backgroundColor: null
        }
    );
}
