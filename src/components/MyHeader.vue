<template>
  <div class="head">
    <ul>  
      <li class="logo">"LIGHT"ENTRY LUX</li>
      
      <div class="menu-set" @click="menuOn">
        <router-link to="/"  v-slot="{active}">
          <li id="menu-1" class="menu" :class="{'Click-2':active}" @click="menu1On">HOME</li>
        </router-link>
        <li id="menu-2" class="menu" :class="{'Click-2':active}" @click="menu2On">
          <router-link to="/about-us" v-slot="{active}">
            <li :class="{'Click-2':active}">ABOUT US</li>
          </router-link>
          <ul id="submenu-1" :class="sub1">
            <router-link to="/about-us">
              <li class="menu-item">Company Profile</li>
            </router-link>
            <router-link to="/about-us">
              <li class="menu-item">公司理念</li>
            </router-link>
          </ul>
        </li>

        <li id="menu-3" class="menu" @click="menu3On">
          <router-link to="/products" v-slot="{active}">
            <li :class="{'Click-3':active}">PRODUCTS</li>
          </router-link>
          <ul id="submenu-2" :class="sub2">
            <router-link to="/products">
              <li class="menu-item">New fancy electronic products</li>
            </router-link>
            <router-link to="/products">
              <li class="menu-item">Craft ornaments</li>
            </router-link>
            <router-link to="/products">
              <li class="menu-item">Personalized customized products</li>
            </router-link>
          </ul>
        </li>

        <router-link to="/contact-us"  v-slot="{active}">
          <li id="menu-4" class="menu" :class="{'Click-4':active}" @click="menu4On">CONTACT US</li>
        </router-link>
      </div>
    </ul>
    <button id="menubox">
      <div class="check"></div>
    </button>
    <span class="scarf" :class="scarf"></span>
  </div>
  
</template>


<script type="text/javascript">
  export default{
    name: 'Header',
    data(){
      return{
        active: false,
        scarf: '',
        sub1: '',
        sub2: '',
      }
    },
    methods:{
      menuOn:function(){
        this.sub1 = '';
        this.sub2 = '';
      },
      menu1On:function(){
        // alert(e);
        this.active = !this.active;
        this.scarf = 'scarf';
        this.sub1 = this.sub2 = '';
      },
      menu2On:function(e){
        // alert(e);
        this.scarf = 'scarf2';
        this.sub1 = (this.sub1==''?'sub':'');
        this.sub2 = '';
      },
      menu3On:function(e){
        this.scarf = 'scarf3';
        this.sub2 = (this.sub2==''?'sub':'');
        this.sub1 = '';
      },
      menu4On:function(e){
        this.scarf = 'scarf4';
        this.sub1 = this.sub2 = '';
      },
    }
  }
</script>

<style src="@/assets/CSS/header.css" scoped></style>