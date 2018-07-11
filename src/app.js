/**
 * Created by Administrator on 2018/6/28.
 */
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
Vue.component('g-button-group',ButtonGroup);

new Vue({
    el:"#app",
    data:{
        loading1:false,
        loading2:true,
        loading3:false
    }
});

// import chai from 'chai'
// import spies from 'chai-spies';
// chai.use(spies);
// const expect = chai.expect;
// {
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData:{
//             icon:'settings'
//         }
//     });
//
//
//     button.$mount();
//     let userElement = button.$el.querySelector('use')
//     expect(userElement.getAttribute('xlink:href')).to.eq('#i-settings');
//     button.$el.remove();
//     button.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData:{
//             icon:'settings',
//             loading:true
//         }
//     });
//
//     button.$mount();
//     let userElement = button.$el.querySelector('use');
//     expect(userElement.getAttribute('xlink:href')).to.eq('#i-loading');
//     button.$el.remove();
//     button.$destroy()
// }
//
//
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData:{
//             icon:'settings'
//
//         }
//     });
//     button.$mount(div);
//     let svg = button.$el.querySelector('svg');
//     let{order} = window.getComputedStyle(svg);
//     expect(order).to.eq('1');
//     button.$el.remove();
//     button.$destroy()
//
// }
// {
//     const div = document.createElement('div');
//     document.body.appendChild(div);
//     const Constructor = Vue.extend(Button);
//     const button = new Constructor({
//         propsData:{
//             icon:'settings',
//             iconPosition:'right'
//
//         }
//     });
//     button.$mount(div);
//     let svg = button.$el.querySelector('svg');
//     let{order} = window.getComputedStyle(svg);
//     expect(order).to.eq('2');
//     button.$el.remove();
//     button.$destroy()
// }
// {
//
//     const Constructor = Vue.extend(Button);
//     const vm = new Constructor({
//         propsData:{
//             icon:'settings',
//             iconPosition:'right'
//
//         }
//     });
//     vm.$mount();
//     let spy = chai.spy(function () {
//
//     });
//
//    vm.$on('click',spy);
//     let button  = vm.$el;
//     button.click();
//     expect(spy).to.have.been.called()
// }
