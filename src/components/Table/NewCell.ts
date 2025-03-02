const NewCell = (included: boolean = false) => `<button
    class="included-button"
    aria-pressed="${included}"
    onclick="this.ariaPressed = !(this.ariaPressed === 'true')">
        <img src="/arrow.svg" alt="" /> Included
</button>`;

export default NewCell;
