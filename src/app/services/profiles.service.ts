import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {


  profileList:any[] = [
    {
      title: 'Christian Sotomayor',
      message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tenetur accusantium veniam perspiciatis sunt nulla, sit maxime ratione vel cumque dolore blanditiis molestias molestiae sapiente, nesciunt a similique temporibus eaque.',
      office: 'Software Developer en Corporación Educativa Pamer',
      image: './assets/images/perfiles/cristian.jfif',
    },
    {
      title: 'Anthony Cajacuri Ordoñez',
      message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tenetur accusantium veniam perspiciatis sunt nulla, sit maxime ratione vel cumque dolore blanditiis molestias molestiae sapiente, nesciunt a similique temporibus eaque.',
      office: 'Desarrollador Front End Angular, React Js & Back End NodeJS',
      image: './assets/images/perfiles/nino.jfif',
    },
    {
      title: 'Nicolas Ticona Valdivia',
      message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tenetur accusantium veniam perspiciatis sunt nulla, sit maxime ratione vel cumque dolore blanditiis molestias molestiae sapiente, nesciunt a similique temporibus eaque.',
      office: 'Frontend Developer at Applaudo Studios',
      image: './assets/images/perfiles/nicolas.jfif',
    },
    {
      title: 'Bladimir Ricardo Ventura Sulca',
      message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tenetur accusantium veniam perspiciatis sunt nulla, sit maxime ratione vel cumque dolore blanditiis molestias molestiae sapiente, nesciunt a similique temporibus eaque.',
      office: 'Center Leader Developer en Everis',
      image: './assets/images/perfiles/bladimir.jfif',
    },
    {
      title: 'Jair Jaime Cierto Zavaleta',
      message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tenetur accusantium veniam perspiciatis sunt nulla, sit maxime ratione vel cumque dolore blanditiis molestias molestiae sapiente, nesciunt a similique temporibus eaque.',
      office: 'Psicólogo | Coach | Facilitador de Aprendizajes',
      image: './assets/images/perfiles/jair.jfif',
    },
    {
      title: 'Ricardo Nuñez Alvarado',
      message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tenetur accusantium veniam perspiciatis sunt nulla, sit maxime ratione vel cumque dolore blanditiis molestias molestiae sapiente, nesciunt a similique temporibus eaque.',
      office: 'Fundador de Evolucionmedia',
      image: './assets/images/perfiles/dricardo.jfif',
    },
    {
      title: 'Elizabeth Vásquez Centurión',
      message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia tenetur accusantium veniam perspiciatis sunt nulla, sit maxime ratione vel cumque dolore blanditiis molestias molestiae sapiente, nesciunt a similique temporibus eaque.',
      office: 'Community manager en Bambu Home Perú',
      image: './assets/images/perfiles/zoilita.jfif',
    },
  ]

  constructor() {
    console.log('hi services in action');

  }
}
