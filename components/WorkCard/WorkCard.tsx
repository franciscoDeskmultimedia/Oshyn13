import Image from "next/image"
import styles from "../WorkCard/WorkCard.module.scss"
import Link from "next/link"

const WorkCard = (props:any) => {
    return(
        <Link href={`/work/${props.slug}`}>
            <div className={`${styles.work_card} bg-white px-12 py-12 `}>
                <div className="work-card__inner">
                    <div className="work-card__image">
                        <Image src={props.image.url} alt={props.image.title} width={437} height={251} />
                    </div>
                    <div className="work-card__meta">
                        <p className="work-card__client font-hind mt-8 pb-4">{props.client}</p>
                        <h3 className="work-card__title">{props.title}</h3>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}

export default WorkCard