let model = [
    {
        id: 001,
        sex: "Девушка",
        name: "Аня",
        foto: "http://placehold.it/270x270",
        age: "20",
        location: "Москва"
    },
    {
        id: 002,
        sex: "Девушка",
        name: "Кристина",
        foto: "http://placehold.it/270x270",
        age: "26",
        location: "Санкт-Петербург"
    },
    {
        id: 003,
        sex: "Парень",
        name: "Павел",
        foto: "http://placehold.it/270x270",
        age: "23",
        location: "Самара"
    },
    {
        id: 004,
        sex: "Парень",
        name: "Сергей",
        foto: "http://placehold.it/270x270",
        age: "35",
        location: "Москва"
    },
    {
        id: 005,
        sex: "Девушка",
        name: "Диана",
        foto: "http://placehold.it/270x270",
        age: "18",
        location: "Санкт-Петербург"
    },
    {
        id: 006,
        sex: "Девушка",
        name: "Диана",
        foto: "http://placehold.it/270x270",
        age: "34",
        location: "Самара"
    },
    {
        id: 007,
        sex: "Парень",
        name: "Валентин",
        foto: "http://placehold.it/270x270",
        age: "23",
        location: "Москва"
    },
    {
        id: 008,
        sex: "Девушка",
        name: "Лариса",
        foto: "http://placehold.it/270x270",
        age: "29",
        location: "Самара"
    },
    {
        id: 009,
        sex: "Девушка",
        name: "Анжелика",
        foto: "http://placehold.it/270x270",
        age: "25",
        location: "Москва"
    },
    {
        id: 010,
        sex: "Девушка",
        name: "Настя",
        foto: "http://placehold.it/270x270",
        age: "28",
        location: "Санкт-Петербург"
    },
    {
        id: 011,
        sex: "Парень",
        name: "Алексей",
        foto: "http://placehold.it/270x270",
        age: "28",
        location: "Санкт-Петербург"
    },
    {
        id: 012,
        sex: "Девушка",
        name: "Лена",
        foto: "http://placehold.it/270x270",
        age: "21",
        location: "Самара"
    },
    {
        id: 013,
        sex: "Девушка",
        name: "Таня",
        foto: "http://placehold.it/270x270",
        age: "33",
        location: "Санкт-Петербург"
    },
    {
        id: 014,
        sex: "Девушка",
        name: "Наташа",
        foto: "http://placehold.it/270x270",
        age: "24",
        location: "Москва"
    },
    {
        id: 015,
        sex: "Девушка",
        name: "Марина",
        foto: "http://placehold.it/270x270",
        age: "28",
        location: "Санкт-Петербург"
    },
    {
        id: 016,
        sex: "Девушка",
        name: "Люда",
        foto: "http://placehold.it/270x270",
        age: "19",
        location: "Санкт-Петербург"
    },
    {
        id: 017,
        sex: "Девушка",
        name: "Света",
        foto: "http://placehold.it/270x270",
        age: "28",
        location: "Москва"
    },
    {
        id: 018,
        sex: "Девушка",
        name: "Настя",
        foto: "http://placehold.it/270x270",
        age: "38",
        location: "Санкт-Петербург"
    }
];
let cssClasses = {
    age : 'age-data',
    flexGrid: 'col-xs-3',
    name: 'name',
    row: 'row',
    box: 'box',
    flexGridSm: 'col-sm',
    flexGridMd: 'col-md-6',
    fotoContainer: 'foto-container',
    location: 'location',
    itemWrap: 'item-wrap',
    buttonWrite: 'button-write',
    favorite: 'favorite',
    infoContainer: 'info-container',
    paginatorBox: 'paginator',
    mail: 'icon-mail',
    star: 'icon-star-empty'
};
class TransferService {
	constructor () {
		this.data = {}
	}
	setData (params) {
		this.data[params.name] = params.data;
	}
	getData (name) {
		return this.data[name];
	}
}
class Applications {
    constructor(options){
        this.options = options;
    }
    render (target, cssClasses) {
        let self = this;
        let wrapper = document.createElement('div');
        wrapper.classList.add(cssClasses.row, cssClasses.box);
        target.appendChild(wrapper);
    
        

        this.options.forEach(function(item, i){
            let itemWrap = document.createElement('div');
            let writeButton = document.createElement('button');
            let favBtn = document.createElement('button');
            let name = document.createElement('div');
            let fotoContainer = document.createElement('div');
            let foto = document.createElement('img');
            let age = document.createElement('div');
            let location = document.createElement('div');
            let infoContainer = document.createElement('div');
            
            infoContainer.appendChild(name);
            infoContainer.appendChild(age);
            infoContainer.appendChild(location);
            fotoContainer.appendChild(writeButton);
            fotoContainer.appendChild(favBtn);
            itemWrap.appendChild(fotoContainer);
            itemWrap.appendChild(infoContainer);
            fotoContainer.appendChild(foto);
            
            foto.setAttribute('src', self.options[i].foto);
            foto.setAttribute('alt', self.options[i].name);
            wrapper.appendChild(itemWrap);
            fotoContainer.classList.add(cssClasses.fotoContainer);
            name.classList.add(cssClasses.name);
            writeButton.classList.add(cssClasses.buttonWrite, cssClasses.mail);
            favBtn.classList.add(cssClasses.favorite, cssClasses.star);
            writeButton.innerHTML = "Написать";
            favBtn.innerHTML = "Избранное";
            infoContainer.classList.add(cssClasses.infoContainer);
            location.classList.add(cssClasses.location);
            itemWrap.classList.add(cssClasses.flexGrid, cssClasses.flexGridSm, cssClasses.flexGridMd, cssClasses.itemWrap);
            age.classList.add(cssClasses.age);
            name.innerHTML = self.options[i].name+",&nbsp ";
            age.innerHTML = self.options[i].age;
            location.innerHTML = self.options[i].location;
            infoContainer.style.width = foto.clientWidth+'px'; 
        })
        // paginator
        let paginatorBox = document.createElement('div');
        paginatorBox.classList.add(cssClasses.paginatorBox);
        paginatorBox.addEventListener('click', pagination);

        let count = this.options.length;
        let cnt = 8;
        let cntPage = Math.ceil(count/cnt);
        
        
        target.appendChild(paginatorBox);
        let paginator = document.querySelector(".paginator");
        
        let page = "";
         for (let i = 0; i < cntPage; i++) {
             page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
        }
        paginator.innerHTML = page;
        let itemWrap = document.querySelectorAll('.item-wrap');
        for (let i = 0; i < count; i++) {
            
            if (i < cnt) {
                itemWrap[i].style.display = "block";
            }
            else {
                itemWrap[i].style.display = "none";
            }
        }
        let mainPage = document.querySelector('#page1');
        mainPage.classList.add("paginator_active");

        function pagination(event) {
            let e = event || window.event;
            let target = e.target;
            let id = target.id;
            let currPage = +target.innerHTML;
            if (target.tagName.toLowerCase() != "span") return;
            let num_ = id.substr(4);
            let data_page = +target.dataset.page;
            mainPage.classList.remove("paginator_active");
            mainPage = document.getElementById(id);
            mainPage.classList.add("paginator_active");
            for (let i = 0; i < count; i++) {
                itemWrap[i].style.display = "none";
             if (i >= (cnt*(currPage-1)) && i < (cnt*currPage)){
                 itemWrap[i].style.display = "block";
                }          
            }
          }
    }
    rerender() {
                                                                
        if (document.querySelector('.box')){
            document.querySelector('.box').remove();
        }
        if (document.querySelector('.paginator')) {
            document.querySelector('.paginator').remove();
        }
        let targetRender = document.querySelector('.applications');
        this.render(targetRender, cssClasses);

        
    }
}