function SkillCard({
    title,
    items,
    color
}) {

    return (

        <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className={`text-2xl font-bold mb-5 ${color}`}>
                {title}
            </h2>

            <div className="flex flex-wrap gap-3">

                {items.map((skill,index)=>(

                    <span
                    key={index}
                    className="bg-gray-100 px-4 py-2 rounded-full">

                        {skill}

                    </span>

                ))}

            </div>

        </div>

    );

}

export default SkillCard;