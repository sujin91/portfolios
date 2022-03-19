$(document).ready(() => {
    render_projects('all');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/my/clock.png',
            link: 'https://github.com/sujin91/clock-app',
            title: 'Clock-App',
            technologies: ['VanillaJS'],
            description: "MVC + 옵저버패턴을 사용한 시계, 알람, 스톱워치 기능을 가진 시계앱입니다. Vanilla JS로만 구현하였습니다.",
            categories: ['fedev', 'diy']
        },
        {
            image: 'assets/my/wetube.png',
            link: 'https://github.com/sujin91/wetube',
            title: 'Wetube',
            technologies: ['VanillaJS', 'Express', 'MongoDB'],
            description: "'유튜브 클론코딩', 유저들은 영상을 재생하고, 댓글을 달고, 검색할 수 있으며, 자기 자신의 비디오를 녹화하고 업로드 할 수 있습니다.",
            categories: ['fedev', 'diy']
        },
        {
            image: 'assets/my/nomflix.png',
            link: 'https://github.com/sujin91/nomflix',
            title: 'Nomflix',
            demo: false,
            technologies: ['ReactJS'],
            description: "영화 웹서비스 만들기, 리액트를 활용한 간단한 영화 웹 서비스입니다. ",
            categories: ['fedev', 'diy']
        },
        {
            image: 'assets/my/tokyo2020_2.png',
            title: '2020 TOKYO',
            technologies: ['Semantic UI', 'ReactJS', 'CSS'],
            description: "네이버 2020 도쿄올림픽 특집페이지, React에서 마크업을 개발하였습니다. #다크모드 #반응형웹",
            categories: ['uidev', 'works']
        },
        {
            image: 'assets/my/election1.png',
            link: 'https://news.naver.com/main/election/region2018/',
            title: '제7회 전국동시지방선거',
            technologies: ['Semantic UI', 'CSS'],
            description: "네이버 제7회 전국동시지방선거 특집페이지, 마크업을 개발하였습니다.",
            categories: ['uidev', 'works']
        },
        {
            image: 'assets/my/election5.png',
            link: 'https://m.news.naver.com/election/nation2020/exit/regional',
            title: '제21대 국회의원선거',
            technologies: ['Semantic UI', 'CSS'],
            description: "네이버 제21대 국회의원선거 특집페이지, 마크업을 개발하였습니다.",
            categories: ['uidev', 'works']
        },
        {
            image: 'assets/my/shopping.png',
            link: 'https://campaign.naver.com/2021chart',
            title: '2021 연말차트',
            technologies: ['VanillaJS', 'Jquery'],
            description: "2021년도 쇼핑 내역 총정리! 쇼핑 API를 사용하여 네이버 쇼핑 관련 데이터를 노출합니다.",
            categories: ['fedev', 'works']
        },
        {
            image: 'assets/my/whaleonstudy.png',
            link: 'https://campaign.naver.com/whaleonstudy',
            title: '웨일온스터디',
            technologies: ['TypeScript'],
            description: "웨일온스터디 테마좋아요 이벤트, 스터디 테마의 동영상과 컨텐츠를 노출하고 좋아하는 테마를 투표합니다.",
            categories: ['fedev', 'works']
        },
        // {
        //     image: 'assets/images/social-share-count.jpeg',
        //     link: 'https://github.com/abhn/Social-Share-Counts',
        //     title: 'Social Share Count',
        //     demo: false,
        //     technologies: ['Python'],
        //     description: "Ever wondered how many times a URL has been shared on popular social networks?",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/data-destroyer.png',
        //     link: 'https://github.com/abhn/data-destroyer-gui',
        //     title: 'Data Destroyer',
        //     demo: false,
        //     technologies: ['C++', 'Qt'],
        //     description: "Native GUI wrapper for GNU coreutils tool 'dd'",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/raspberry-pi-monitor.png',
        //     link: 'https://github.com/abhn/RPi-Status-Monitor',
        //     title: 'Raspberry Pi Monitor',
        //     demo: false,
        //     technologies: ['python', 'flask'],
        //     description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
        //     categories: ['webdev', 'diy']
        // },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}