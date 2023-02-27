import Link from "next/link"
import { Fragment } from "react"

const NewsPage = () => {
    return (
        <Fragment>
            <h1>The News Pages</h1>
            <ul>
                <li><Link href='/news/newsId1'>go to detail page</Link></li>
                <li><Link href='/news/newsId2'>go to detail page</Link></li>
                <li><Link href='/news/newsId3'>go to detail page</Link></li>
            </ul>
        </Fragment>
    )
}

export default NewsPage