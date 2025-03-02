const NewColumnHeader = (
    text: string = 'Standard Edition', src?: string
) => `<label class="edition-cover">
    <img ${src ? `src="${src}"` : ''} alt="" class="edition-cover-image" />
    <input
        class="edition-cover-selector"
        oninput="selectCover(this)"
        type="file"
        accept="image/*"
    />
</label>
<p contenteditable>${text}</p>`;

export default NewColumnHeader;
