function Section(props) {
    return (
        <section className={`flex flex-col gap-4 ${props.className || ''}`}>
            {props.title &&
                <div className="flex flex-col">
                    <h2 className="font-semibold text-xl">{props.title}</h2>
                    {props.subtitle &&
                        <h3 className="text-sm text-gray-500 dark:text-gray-300">{props.subtitle}</h3>
                    }
                </div>
            }
            {props.children}
        </section>
    )
}

export default Section