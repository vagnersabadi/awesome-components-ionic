import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-instagram',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.scss'],
})
export class InstagramComponent implements OnInit {
  instaData = [
    {
      title: 'Striker II',
      subtitle: 'Hey there !',
      img: 'https://www.dropbox.com/s/fmv3y88ccpuajgo/musk.jpg?raw=1',
      avatar: 'https://www.dropbox.com/s/149w8lj8w2mkdig/trump.jpg?raw=1',
      desc: 'Lorem ipsum dolor what is this multi-line text',
      likes: '5 likes'
    },
    {
      title: 'Akena',
      subtitle: 'Mountain lover !',
      img: 'https://www.dropbox.com/s/nmwasfye1ur01la/mountain.jpg?raw=1',
      avatar: 'https://www.dropbox.com/s/x12of27iact93y3/coderr.jpg?raw=1',
      desc: 'Lorem ipsum dolor what is this multi-line text',
      likes: '1115 likes'
    },
    {
      title: 'Adam Chris',
      subtitle: 'Is dil ke laddoo fat gaye',
      img: 'https://www.dropbox.com/s/u2zkqe6wu2pt9ke/boy.jpg?raw=1',
      avatar: 'https://www.dropbox.com/s/n6eg08194q7nxvl/codergirl.jpg?raw=1',
      desc: 'Lorem ipsum dolor what is this multi-line text',
      likes: '10 likes '
    },
    {
      title: 'Jim Halpert',
      subtitle: 'Yipee ka yay',
      img: 'https://www.dropbox.com/s/6b6cirog51q9sfm/coder.jpg?raw=1',
      avatar: 'https://www.dropbox.com/s/ct8s21p1mznn0l2/aptaya.jpg?raw=1',
      desc: 'Lorem ipsum dolor what is this multi-line text',
      likes: '100 likes '
    },
    {
      title: 'Micheal Scott',
      subtitle: 'Scmarf Kajaaak',
      img: 'https://www.dropbox.com/s/9x31o0pw5qld8wg/boyy.jpg?raw=1',
      avatar: 'https://www.dropbox.com/s/149w8lj8w2mkdig/trump.jpg?raw=1',
      desc: 'Lorem ipsum dolor what is this multi-line text',
      likes: '100 likes '
    },

  ]
  constructor() { }

  ngOnInit() { }

}
