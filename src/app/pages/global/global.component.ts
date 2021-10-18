import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  logo='https://1000marcas.net/wp-content/uploads/2020/01/Netflix-simbolo.jpg'

  nav=['Inicio','Series TV', 'Películas', 'Novedades más vistas','Mi lista'];

  top=[
    {
      name:"El juego del Calamar",
      top:1,
      url:"https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTkp23eunYEtrSm5sejd-IfNdBTlWLTrbiBPxwg9lIXHHyR4QeNHQUOXmtmo4aZx3yYz8D1jpGcTejKlxJ9D91Reu5aQuwGKf52P3MzYxJlhU0TCygTF3h2DPMFDEQ.webp?r=cd1",
      type:'Serie'
    },
    {
      name:"You",
      top:2,
      url:"https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABb3O3XfIJ4-cjBMs9NFiirGhajdAyeLT3vBPqFDDfEHzQYVagYanmuOckwqUP028hwOzwmrSVuM7Mw20M65YXl2_oDEMewkQVK1khT3mShPj4tlJOqI0Hqx_3A-o5kxVqOKNu8-351xNPrASzxFt9oPTTq28D9E.webp?r=0b1",
      type:'Serie'
    },
    {
      name:"La asistenta",
      top:3,
      url:"https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRgjTZL_7scxCBGE7BE0EhwqhH6VM2UcWCxu138wjrl3-eP_cG0gHgH4lmO-W-H5-uHH8zsZnuLMd-iJpUOHTc-uQPmqm7iqftxbdFSnExBBP4RhDal-s9I-KKTOgQ.webp?r=a7a",
      type:'Mini-serie'
    },
    {
      name:"la batalla olvidada",
      top:4,
      url:"https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTZv1CZRcNM-wAzkUSUPcI18vVpCjYgVr3-O4YBs1plu5kEmMmVMbgpJ4UL0X-qkrIqn9UAt-STzgWTOiUmsQySNnBv_UUHwBIniEMxkIcGIzY1bm9prH4JMAJB0Aw.webp?r=625",
      type:'Película'
    },
    {
      name:"El caso Hartung",
      top:5,
      url:"https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRNfIpLPKIqbnYMrvRglH1Vc7dNfi_HZgET-74DA0TvbZWphW4NS_rGHNXTmN09YBbhKSeXJrlDJhlHaP7X3fn0Cc4AAD2jrV3YOwl9KhboUb4iaupJ-5RcQ2wf3Dw.webp?r=e9c",
      type:'Serie'
    },
  ]

  docu=[
    {
      name:'Monstruos Internos',
      url:'https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABazhH-fWQG59dzbeOpd8WaeLsQwCrKkuJg0otgiIEd2CYqRyWOhjG6wZohDSnEkcBB2Kt8ELmjRDPI0wTHCatABbOxacyYpN0zq68sWe4RdQRAvA0CxEwjsGCNsb.jpg?r=cd0'
    },
    {
      name:'La casa de los secretos',
      url:'https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRTfWpVdvk2XB798Oqck3YSLxJAfr0zLk_sT1rZej3xQWY1cibSnCBAXZ4OYoR-M1PgFIVmk8047HCXXnRlXKTEoAhZjv-4Vnvpc6fqr32VFDkDgu15EMEhX9_eS.jpg?r=e0d'
    },
    {
      name:'Franco',
      url:'https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ1PSNGqxcc1ggcrEW1d3e7kibvDO_Y0P8j7FB9mLe0ZD-sdRFkNROs-lbKKKFJUglHeXhNK8K9AEnMT_YKl5y-nqKo.webp?r=103'
    },
    {
      name:'Proyectos de alto secreto',
      url:'https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRUO27hFEYqkV0zUd_Hvjj6DuGgby3M9WNvSDsVaNOusn8_KvVMKwKCQmrVNaOpT4WL-rb_I1eOw1r-hhXCGdNvBYu15F0T0AKGgyY7e2lB5R7bxXZGGANKnpA4W.jpg?r=25a'
    },
    {
      name:'72 Animales peligrosos',
      url:'https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcDmMjYPYFzbsXw69AonhiTdc4m57_9UB6UC4G9bMA5QNQu1qWFpcEdYb5nTdnaV5BBkP9fU6MV5x747xjFJvI7Z36ZvW7sUBNYzN5FOjsOJBElPxfZCpDfX7pH6.jpg?r=1f8'
    }
  ];

  series=[
    {
      name:'MR. Robot',
      url:'https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeiIi7MlQAuohMCGU_NYT-_FqqYI_bTsyJ1-ejRsW2cIIaR3Ynk0BCDA7GYcd4IWzWkH1n02PeYNcsLrZMHiTWP43OQ.webp?r=fa3'
    },
    {
      name:'Vikingos',
      url:'https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQejPYyBSbvwXyjwLlI_2RSfYWtapOHZBbRAKcVvShdbLFfj0wDno24lh6ISQBzHCPuUj50MV-82gVnDHyYSHKzLLIk.webp?r=78f'
    },
    {
      name:'Gambito de Dama',
      url:'https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfwmvRMe8aUThH12F04DaGYwSyTP-4YAglbTNPWMXqZ71I-iLHXZl7KtjatKC2-eIKVD0i3oC0kG4h_QV0ekJlmAGfHb5F6j4oOPPqgsG-WNOu2cvOQNiks-WKx4.jpg?r=042'
    },
    {
      name:'Better call Saul',
      url:'https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWvoum773rjh_fuj1-dH_Nnfg1cXspftI2C6B6LAPKChL2EvnIGfPZtEJah1aqp7j1PUM67xmTf1a8c7Zq-6Jpmfjgg.webp?r=f89'
    },
    {
      name:'Hijos de la Anarquía',
      url:'https://occ-0-2031-358.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfb8DuyQiWYniOWkPUcfnoykXWb-GtlC0QuBWETfzrI8JpCYXaCdiUr7F5BaSqZd3gS2e480JriREicQyQE83dOwj20.webp?r=451'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
