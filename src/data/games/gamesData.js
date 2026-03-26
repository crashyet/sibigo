import imgS from '@/assets/book/alphabet/s.png'
import imgU from '@/assets/book/alphabet/u.png'
import imgT from '@/assets/book/alphabet/t.png'
import imgB from '@/assets/book/alphabet/b.png'
import imgI from '@/assets/book/alphabet/i.png'
import imgM from '@/assets/book/alphabet/m.png'
import imgA from '@/assets/book/alphabet/a.png'
import imgJ from '@/assets/book/alphabet/j.png'
import imgE from '@/assets/book/alphabet/e.png'
import imgR from '@/assets/book/alphabet/r.png'
import imgO from '@/assets/book/alphabet/o.png'
import imgK from '@/assets/book/alphabet/k.png'

import num1 from '@/assets/book/number/1.png'
import num3 from '@/assets/book/number/3.png'
import num6 from '@/assets/book/number/6.png'

import susu from '@/assets/susu.png'
import meja from '@/assets/meja.png'

const gamesData = [
  {
    "id": "game_matching",
    "title": "Ayo Bermain!",
    "description": "Uji kemampuanmu dan pasangkan gambar dengan benar!",
    "type": "matching",
    "questions": [
      {
        "id": 1,
        "pairs": [
          { id: "p1", "image": imgS, "label": "S" },
          { id: "p2", "image": imgU, "label": "U" },
          { id: "p3", "image": imgT, "label": "T" }
        ]
      },
      {
        "id": 2,
        "pairs": [
          { id: "p1", "image": num1, "label": "1" },
          { id: "p2", "image": num3, "label": "3" },
          { id: "p3", "image": num6, "label": "6" }
        ]
      }
    ]
  },
  {
    "id": "game_spelling",
    "title": "Ayo Bermain!",
    "description": "Uji kemampuanmu dan susun nama gambar berikut dengan benar!",
    "type": "reorder_with_hint",
    "questions": [
      {
        "id": 1,
        "hint_image": susu,
        "correct_word": "SUSU",
        "scrambled_hands": [
          { id: 'h1', image: imgS, label: 'S' },
          { id: 'h2', image: imgB, label: 'B' },
          { id: 'h3', image: imgS, label: 'S' },
          { id: 'h4', image: imgU, label: 'U' },
          { id: 'h5', image: imgI, label: 'I' },
          { id: 'h6', image: imgU, label: 'U' }
        ]
      },
      {
        "id": 2,
        "hint_image": meja,
        "correct_word": "MEJA",
        "scrambled_hands": [
          { id: 'h1', image: imgM, label: 'M' },
          { id: 'h2', image: imgA, label: 'A' },
          { id: 'h3', image: imgJ, label: 'J' },
          { id: 'h4', image: imgE, label: 'E' },
          { id: 'h5', image: imgA, label: 'A' },
          { id: 'h6', image: imgJ, label: 'J' }
        ]
      }
    ]
  },
  {
    "id": "game_arrange",
    "title": "Ayo Bermain!",
    "description": "Uji kemampuanmu dan susun kata dengan benar!",
    "type": "reorder_pure",
    "questions": [
      {
        "id": 1,
        "correct_word": "SABAR",
        "scrambled_hands": [
          { id: 'h1', image: imgA, label: 'A' },
          { id: 'h2', image: imgB, label: 'B' },
          { id: 'h3', image: imgR, label: 'R' },
          { id: 'h4', image: imgA, label: 'A' },
          { id: 'h5', image: imgS, label: 'S' }
        ]
      },
      {
        "id": 2,
        "correct_word": "BAKSO",
        "scrambled_hands": [
          { id: 'h1', image: imgO, label: 'O' },
          { id: 'h2', image: imgB, label: 'B' },
          { id: 'h3', image: imgK, label: 'K' },
          { id: 'h4', image: imgS, label: 'S' },
          { id: 'h5', image: imgA, label: 'A' }
        ]
      }
    ]
  }
]

export default gamesData