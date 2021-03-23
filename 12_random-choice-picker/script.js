const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTag(e.target.value);
})

function createTag(input) {
    const tags = input.split(',').
        filter(t => t.trim() !== '')
        .map(tt => tt.trim());

    tagsEl.innerHTML = '';
    tags.forEach((tag) => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);

    })

}