'use strict'
{

    const url = 'https://api.github.com/repos/HackYourFuture/';
    const contributors = '/contributors';

    class view {

        constructor() {
            this.root = document.getElementById("root");
        }

        render() {
            this.renderHeader();
            this.renderListContainer();
        }

        renderHeader() {
            createAndAppend('h1', this.root, '"HYF REPOSITORIES"');
            const div = createAndAppend('div', this.root);
            const input = createAndAppend('input', div, 'input here');
            input.setAttribute('type', 'text');
            const button = createAndAppend('button', div, "PRESS FOR REPOS!");
            button.addEventListener('click', () => {
                this.onButtonClick(input.value);
            });
        }

        renderListContainer() {
            this.listContainer = createAndAppend('div', this.root, null, 'list-container')
        }


        renderRepos(repo) {

            const div = createAndAppend('div', this.listContainer, null, 'whiteframe');
            const table = createAndAppend('table', div);
            const tbody = createAndAppend('tbody', table);
            this.addRow(tbody, 'Name', repo.name);
            this.addRow(tbody, 'Description', repo.description);

            const img = createAndAppend('img', tbody, null, 'repoImage');
            img.src = repo.owner.avatar_url;
        }

        renderContributors(repo) {
            repo.forEach(item => {
                const divContribute = createAndAppend('div', this.listContainer, null, 'contributors');
                createAndAppend('h2', divContribute, 'name of the contributor:  ' + item.login);
                const imgcon = createAndAppend('img', divContribute, null, 'imgContributors');
                imgcon.src = item.avatar_url;
                const a = document.createElement('a');
                a.href = item.html_url;
                a.target = '_blank';

            });
        }

        addRow(tbody, label, value) {
            const row = createAndAppend('tr', tbody);
            createAndAppend('td', row, label + ':', 'label');
            createAndAppend('td', row, value);
        }

        onButtonClick(value) {
            this.listContainer.innerHTML = "";

            fetchJSON(url + value, (error, data) => {
                if (error) {
                    console.log('ERROR!');
                } else {
                    this.renderRepos(data);
                }
            });

            confetchJSON(url + value + contributors, (error, data) => {
                if (error) {
                    console.log('ERROR!');
                } else {
                    this.renderContributors(data);
                }
            });
        }
    }

    function createAndAppend(name, parent, innerhtml, className) {

        const child = document.createElement(name);
        parent.appendChild(child);

        if (innerhtml) {
            child.innerHTML = innerhtml;
        }
        if (className) {
            child.classList.add(className);
        }
        return child;
    }

    function fetchJSON(url, cb) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = () => cb(null, xhr.response);
        xhr.onerror = () => cb(new Error(xhr.statusText));
    }

    function confetchJSON(url, cb) {
        const conXhr = new XMLHttpRequest();
        conXhr.open('GET', url);

        conXhr.responseType = 'json';
        conXhr.send();
        conXhr.onload = () => cb(null, conXhr.response);
        conXhr.onerror = () => cb(new Error(conXhr.statusText));
    }



    function start() {
        const View = new view();
        View.render();
    }
    start();
}
