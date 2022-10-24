function PageContent(props) {
    return (
        <div className="flex flex-col gap-12">
            {props.children}
        </div>
    )
}

export default PageContent