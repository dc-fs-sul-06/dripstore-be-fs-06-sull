import { SmallHighlightItem } from "../SmallHighlightItem/SmallHighlightItem"
import { TShirtIcon } from "../SmallHighlightIcons/TShirtIcon"
import { PantsIcon } from "../SmallHighlightIcons/PantsIcon"
import { HeadphoneIcon } from "../SmallHighlightIcons/HeadphoneIcon"
import { TenisIcon } from "../SmallHighlightIcons/TenisIcon"

export const SmallHighlightSection = ({ title, highLightedColleciton }) => {
  return (
    <div className="font-Inter py-10 bg-gray-50 md:bg-purple-50">
      <div>
        <h1 className="text-dark-gray-2 font-bold md:text-2xl md:text-center px-5">{title}</h1>
      </div>
      <div className="pb-[50px] md:pb-[9px]">
        <div className="flex justify-start md:justify-center items-center gap-5 md:gap-10 p-5 overflow-x-auto">
          {highLightedColleciton.map((collection) =>
            <SmallHighlightItem
              image={<TShirtIcon />}
              name={collection.title}
              ctaLink={'#'}
            />
          )}
        </div>
      </div>
    </div>
  )
}
