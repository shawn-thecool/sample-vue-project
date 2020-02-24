const Chart = function() {}

Chart.install = (Vue, opts) => {
  // Vue.setGlobal = function() {
  //   console.log('global method', opts)
  // }
  console.log(', opts', opts);
  
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      console.log('directive', {el, binding, vnode, oldVnode});
    }
  })
  // Vue.mixin({
  //   created(){
  //     console.log('created- mixin', this._self
  //     );
  //   }
  // })
  
  Vue.prototype.$d3 = (opts)=>{
    console.log('proto - opts', opts);
    
  }
}

export default Chart
