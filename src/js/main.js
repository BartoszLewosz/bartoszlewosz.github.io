console.log(`Hello world!`);

const url = "https://api.github.com/users/BartoszLewosz/repos?sort=updated&direction=desc";

const repositories = document.querySelector('.projects__repositories--js');

fetch(url)
    .then(resp => resp.json())
    .then(resp => {
            const repos = resp;
            for (const repo of repos) {
                const { html_url, name, description, homepage } = repo;
                repositories.innerHTML += `
            <section class="projects__repo">
                <div class="projects__container">
                    <img class="projects__logo" src="assets/img/GitHub-Mark-64px.png" alt="github logo.">
                    <h4 class="projects__title">${name}</h4>
                    ${
                        description ? `<p class="projects__content">${description}
                        </p>` : ``
                    } 
                </div>
                <div class="projects__footer">
                ${
                    homepage ? `<a class="projects__link projects__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="demo: ${name}.">Demo</a>`
                    : ``
                }
                    <a class="projects__link projects__link--code" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="source-code: ${name}.">Source
                        Code</a>
                </div>
            </section>`
        }
    })