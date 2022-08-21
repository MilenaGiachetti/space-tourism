type tPictureProps = {
	alt: string,
	className?: string,
	pngSrcSets: string,
	webPSrcSets: string,
}

const Picture = ({ alt, className = "", pngSrcSets, webPSrcSets }: tPictureProps) => {
	return (
		<picture>
			<source srcSet={webPSrcSets} type="image/webp" />
			<img alt={alt} className={className} src={pngSrcSets} />
		</picture>
	)
}

export default Picture
