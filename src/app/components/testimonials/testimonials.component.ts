import { Component, OnInit } from '@angular/core';

interface Testimonial {
  image: string;
  text: string;
  author: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      image: 'assets/images/user1.jpg',
      text: 'They are nothing but a team of professionals. They worked strategically and brought out definite results.',
      author: 'Olivia Hamel',
      role: 'Customer'
    },
    {
      image: 'assets/images/user2.jpg',
      text: 'It was a great experience working with Vertex. They have shown great professionalism throughout the whole process.',
      author: 'Deborah Sedillo',
      role: 'Director of Recruitment (Unison Systems)'
    },
    {
      image: 'assets/images/user3.png',
      text: 'They know the technicality and all the in-outs of the work they do. They have helped me to achieve what I have always dreamed of.',
      author: 'Alexander',
      role: 'Project Director (Charter Communications)'
    },
  ];

  currentTestimonialIndex = 0;

  ngOnInit() {
    this.startTestimonialRotation();
  }

  startTestimonialRotation() {
    setInterval(() => {
      this.showNextTestimonial();
    }, 7000); 
  }

  showNextTestimonial() {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  showPreviousTestimonial() {
    this.currentTestimonialIndex =
      (this.currentTestimonialIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
