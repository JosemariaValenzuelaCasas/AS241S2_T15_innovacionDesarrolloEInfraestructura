// Array
const frameworks = 
    [
        {
            name: "Creación de los ODS (2012)",
            description: "En 2012, durante la Conferencia de las Naciones Unidas sobre el Desarrollo Sostenible (Río+20), se propuso establecer los Objetivos de Desarrollo Sostenible (ODS) como una extensión de los Objetivos de Desarrollo del Milenio (ODM), adaptándose a los retos globales contemporáneos."
        },
        {
            name: "Aprobación de los ODS (2015)",
            description: "El 25 de septiembre de 2015, los líderes mundiales adoptaron la Agenda 2030 para el Desarrollo Sostenible, que incluye 17 ODS. Estos objetivos buscan erradicar la pobreza, proteger el planeta y garantizar la paz y la prosperidad para todos."
        },
        {
            name: "Inicio de la implementación global (2016)",
            description: "En enero de 2016, los ODS entraron en vigor oficialmente. Desde entonces, los países comenzaron a integrar los objetivos en sus políticas nacionales, con el apoyo de organizaciones internacionales."
        },
        {
            name: "Primeros avances y desafíos (2019)",
            description: "En 2019, un informe de las Naciones Unidas destacó tanto los avances significativos en áreas como la salud y la educación como los desafíos persistentes, incluyendo el cambio climático y las desigualdades."
        },
        {
            name: "Impacto del COVID-19 en los ODS (2020)",
            description: "La pandemia de COVID-19 representó un gran retroceso para muchos de los ODS, exacerbando la pobreza y las desigualdades. Sin embargo, también subrayó la importancia de sistemas de salud resilientes y cooperación global."
        },
        {
            name: "Revisión de la década de acción (2021)",
            description: "En 2021, la ONU lanzó una 'década de acción' para acelerar los esfuerzos hacia la consecución de los ODS, destacando la necesidad de financiación, innovación y asociaciones globales para superar los retos actuales."
        },
        {
            name: "A mitad de camino hacia 2030 (2023)",
            description: "En 2023, los informes intermedios subrayaron que, aunque algunos avances se han logrado, muchos ODS están en riesgo debido a la falta de compromiso global, la crisis climática y las desigualdades persistentes."
        },
        {
            name: "Futuro de los ODS (Proyección hacia 2030)",
            description: "Con solo unos años restantes para alcanzar los ODS, se hace un llamado a los países, empresas y ciudadanos para redoblar esfuerzos, promoviendo la cooperación global para construir un futuro sostenible."
        }
    ]
    
// render html
var html = "";
frameworks.forEach(e=>{
    html +="<div class='child'><div class='content'><h4>"+e.name+"</h4><p>"+e.description+"</p></div> </div>"
})
timeline.innerHTML = html

// ANIMACION TIMELINE

var _items = document.querySelectorAll(".child")
_items.forEach(element =>{
    if(element.offsetTop < 300)
        element.classList.add('_show')
})

window.addEventListener("scroll",e=>{
    var scroll = document.documentElement.scrollTop
    var items = document.querySelectorAll(".child")
    items.forEach(elem=>{
        if(elem.offsetTop - window.innerHeight/2 < scroll){
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        }else{
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }

    })
})