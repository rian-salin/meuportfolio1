function solicitarContato() {
            // Solicitar o número e o nome usando prompts
            var nome = prompt("Digite seu nome:");
            var numero = prompt("Digite seu número de telefone:");
    
            // Exibir os dados usando um alert
            alert("Obrigado, " + nome + "! Entrarei em contato em breve no número " + numero + ".");
        }
    
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
            
                    const target = document.querySelector(this.getAttribute('href'));
            
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
        
 //api

 const repositories = document.querySelector('.content-main');

async function getApiGitHub() {
    try {
        const response = await fetch('https://api.github.com/users/rian-salin/repos');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        displayRepositories(data);
    } catch (error) {
        console.error('Error fetching the GitHub API:', error);
    }
}

function displayRepositories(data) {
    data.forEach(item => {
        const project = document.createElement('div');
        project.classList.add('project');

        project.innerHTML = `
            <div>
                <h4 class="titulo">${item.name}</h4>
                <span class="date-create">${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
            </div>
            <div>
                <a href="${item.html_url}" target="_blank" class="button-repo">Ver Repositório</a>
                <span class="language">${item.language}</span>
            </div>
        `;

        repositories.appendChild(project);
    });
}

getApiGitHub();


 //animações
 
 window.sr = ScrollReveal({reset: true});

 sr.reveal('#nome', {
    rotate:{x: 100, y: 100, z: 0},
    duration:1500
 });

 sr.reveal('#habilidades', {
    rotate:{x: 0, y: 80, z: 0},
    duration:3000
 });

 sr.reveal('#projetos', {
    rotate:{x: 0, y: 80, z: 0},
    duration:3000
 });