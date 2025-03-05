const NewCell = (included: boolean = false) => `<button
    class="included-button"
    aria-pressed="${included}"
    data-cell>
        <img src="/icons/arrow.svg" alt="" /> Included
</button>`;

export default NewCell;
