window.onload = function () {
    let transferData = new TransferService();
    let parentRange = document.querySelector('.age-range');
    let outputAge = new Array();
    let inputAge = new Array();
    let elm = document.querySelector('input[type="range"]');
    let container = elm.parentNode;
    let values = elm.getAttribute('data-values').split(' ');

    values.forEach(function (value, i, values) {
        inputAge[i] = elm.cloneNode();
        inputAge[i].type = 'range';
        inputAge[i].removeAttribute('data-values');
        inputAge[i].value = value;
        inputAge[i] = container.insertBefore(inputAge[i], elm);
        inputAge[i].style.width = "100%";
        outputAge[i] = document.createElement('output');
        parentRange.appendChild(outputAge[i]);
        outputAge[i].classList.add('age-show');
        outputAge[i].value = inputAge[i].value;
        inputAge[i].addEventListener('input', rangeHandler);
        

        function rangeHandler () {
            if (+inputAge[0].value >= +inputAge[1].value) {
                inputAge[1].value = inputAge[0].value;
            }
            outputAge[i].value = inputAge[i].value;
            transferData.setData({name: 'lowAge', data: +inputAge[0].value});
            transferData.setData({name: 'upAge', data: +inputAge[1].value});
        }
    })
    transferData.setData({name: 'currSex', data: 'Девушка'});
    transferData.setData({name: 'currCity', data: 'Все города'});

    transferData.setData({name: 'lowAge', data: +inputAge[0].value});
    transferData.setData({name: 'upAge', data: +inputAge[1].value});   
    elm.remove();
    

    
    let switchSex = document.querySelector('select[name="select-sex"]');
    let switchCity = document.querySelector('select[name="select-city"]');
    switchSex.addEventListener('change', switchSexHandler);
    switchCity.addEventListener('change', switcCityHandler);

    function switchSexHandler () {
        transferData.setData({name: 'currSex', data: switchSex.value});
    }
    function switcCityHandler () {
        transferData.setData({name: 'currCity', data: switchCity.value});
    }
    let searchBtn = document.querySelector('.search-btn button');
    searchBtn.addEventListener('click', searchBtnHandler);
    let targetRender = document.querySelector ('.applications');
    function searchBtnHandler () {
        let modelSexFilter = new Array();
        let modelLocationFilter = new Array();
        let modelAgeFilter = new Array();
        model.forEach((item)=>{
            if (item.sex == transferData.getData('currSex')) {
                modelSexFilter.push(item);
            }
        })
        modelSexFilter.forEach((item)=>{
            if (item.location == transferData.getData('currCity')) {
                modelLocationFilter.push(item);
            }
        })
        
        if (transferData.getData('currCity') == 'Все города') {
            modelLocationFilter = modelSexFilter;
        }
        modelLocationFilter.forEach((item)=>{
            if (+item.age >= transferData.getData('lowAge') && +item.age <= transferData.getData('upAge')) {
                modelAgeFilter.push(item)
            }
        })
        let applications = new Applications(modelAgeFilter);
        applications.rerender();
        
    }
    

    let arrowUp = document.querySelector('.arrow-up');
    window.onscroll = function() {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        let innerHeight = document.documentElement.clientHeight;
        if (scrolled > innerHeight) {
            arrowUp.classList.remove('non-vis');
        }
        else {
            arrowUp.classList.add('non-vis');
        }
    }
    arrowUp.addEventListener('click', scrollUpHandler);
    function scrollUpHandler () {
        window.scrollTo(0, 0);
    }
}