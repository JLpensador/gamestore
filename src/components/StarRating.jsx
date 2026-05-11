export default function StarRating({ rating }) {
    const stars = Math.round(rating / 2)

    return (
        <span className="d-flex align-items-center gap-1 small text-light">
            {[1, 2, 3, 4, 5].map((s) => (
                <i
                    key={s}
                    className={`bi bi-star${s <= stars ? '-fill' : ''}`}
                    style={{ color: s <= stars ? '#ffc107' : '#6c757d' }}
                />
            ))}

            <span className="text-secondary ms-1">{rating}</span>
        </span>
    )
}