/* eslint-disable */

$.prototype.dragImg = function(){
    
    this.find('img').on('click', function(e){
        let positionXY = this.getBoundingClientRect()
        console.log(this.getBoundingClientRect())
        let _this = this;
        $this = $(this);
        $this.css({visibility: 'hidden'})
        let createImgage = document.createElement('img');
    
        let div = document.createElement('div');
        let id = 'dragImg' + Math.random() // 生成随机id
        let imgUrl = $this.attr('src');//获取图片url
        div.innerHTML = `<div id=${id} style="cursor: move;
                position: fixed;
                top: ${positionXY.y/2}px;
                left: ${positionXY.x/2}px;
                background: #fff;
                user-select: none;
                box-sizing: border-box;
                width: 500px;
                
                padding: 6px;
                box-shadow: rgb(204, 204, 204) 1px 6px 20px;
                border-radius: 6px;
                z-index:9999
                ">
            <div style="position: relative;">
            <img draggable="false" style="width: 100%;
                user-select: none;
                -webkit-user-select: none;
                display: block;" src=${imgUrl} alt="">
            </div>
            <div style="background: #fff; padding-top:5px">
            <button id=${id}-rotate class="btn btn-primary"><i class="fa fa-repeat"></i></button>
                
            </div>
            
        </div>`;
        document.body.appendChild(div)

        let deg = 90;
            let step = 0
            document.getElementById(`${id}-rotate`).onclick = function(e){
                step ++;
                e.stopPropagation()
                document.documentElement.getElementsByTagName
                let img = ko.getElementsByTagName('img')[0]
                img.style.transform = `rotate(${deg * step}deg)`;
            }
            let ko = document.getElementById(`${id}`)
            ko.onmousedown = function (e) { 
                console.log(e.button)
                if (e.button === 2) return;
                let isHide = true;
                ko.onclick = function(){
                    if (isHide){
                        $(_this).css({visibility: 'unset'})
                        $(ko).parent().remove()
                    }
                   
                }
                this.top = parseFloat(getComputedStyle(this).top);
                this.left = parseFloat(getComputedStyle(this).left);
                this.x = e.pageX;
                this.y = e.pageY;
                document.body.onmousemove = (e)=> {
                    isHide = false;
                    this.style.left = this.left + (e.pageX - this.x) + 'px';
                    this.style.top = this.top + (e.pageY - this.y) + 'px';
                }
                document.onmouseup = function(){
                    document.body.onmousemove = null;
                }
            }
    
    })
    
}

