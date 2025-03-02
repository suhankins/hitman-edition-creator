const NewColumnHeader = (
    text: string = 'Standard Edition'
) => `<label class="edition-cover">
    <input
        class="edition-cover-selector"
        oninput="selectCover(this)"
        type="file"
        accept="image/*"
    />
</label>
<p contenteditable>${text}</p>`;

export default NewColumnHeader;
