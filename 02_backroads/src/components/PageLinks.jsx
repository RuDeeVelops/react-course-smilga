import { pageLinks } from '../data'

export const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
