import { db } from './db.js';

export const getInfo = (section) => {
  if (section === 'Home'){
    return db.filter(i => i.latest);
  }
  return db.filter(i => i.tags.includes(section.toLowerCase()))
}

export const countTags = (tag) => {
 const tags = db.map(a => a.tags).reduce((a, b) => a.concat(b))

 const count = tags.reduce((prev, cur) => {
   prev[cur] = (prev[cur] || 0 ) + 1
   return prev
 }, {})

 return `${tag}(${count[tag]})`
}

export const getProject = project => db.filter(i => i.name.includes(project));
