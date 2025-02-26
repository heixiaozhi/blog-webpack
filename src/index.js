import { getBlogPosts } from './data'
import './style.css'
import './test.scss'
import HeroImage from './asserts/images/hero.jpg'
import './test/date/printDate'

const blogs = getBlogPosts()

// 创建一个ul元素
const ul = document.createElement('ul')
blogs.forEach((blog) => {
  const li = document.createElement('li')
  li.innerText = blog
  ul.appendChild(li)
})

// 将ul添加到页面中去
document.body.appendChild(ul)

// 添加image图片
const image = document.createElement('img')
// 图片路径
image.src = HeroImage

document.body.prepend(image)

// 添加标题
const h1 = document.createElement('h1')
h1.innerHTML = 'Webpack 快速教程'

document.body.prepend(h1)
