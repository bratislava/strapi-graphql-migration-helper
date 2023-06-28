import { stagingClient } from './gql'
import { TagCategoriesQuery } from '../graphql/gallery-localhost'
import { isDefined } from '../utils/isDefined'
import { TagInput } from '../graphql/gallery-staging'

function transformToTagIds(categories: TagCategoriesQuery) {
  return (
    categories.tagCategories?.data
      .map((category) => category.attributes?.tags?.data.map((tag) => tag.id))
      .flat()
      .filter(isDefined) ?? []
  )
}

function transformToTagSlugs(categories: TagCategoriesQuery) {
  return (
    categories.tagCategories?.data
      .map((category) => category.attributes?.tags?.data.map((tag) => tag.id))
      .flat()
      .filter(isDefined) ?? []
  )
}

function instersect(arr1: string[], arr2: string[]) {
  return arr1.some((r) => arr2.indexOf(r) >= 0)
}

async function sections() {
  const { contentPages } = await stagingClient.AllContentPages()

  const programTagCategories = await stagingClient.TagCategories({
    ids: [...['1', '3', '5', '7', '9'], ...['2', '4', '6', '8', '10']],
  })
  const exploreTagCategories = await stagingClient.TagCategories({
    ids: [...['11', '13'], ...['12', '14']],
  })

  const programTagIds = transformToTagIds(programTagCategories)
  const exploreTagIds = transformToTagIds(exploreTagCategories)

  for (const page of contentPages?.data ?? []) {
    // skip inconsistent pages
    if (
      !page.id
      // ||
      // [
      //   ...['1653', '1653', '1812', '1571', '1591', '1655', '1656', '1658', '1668', '1665', '1666', '1727'], // mixed tags
      //   ...['12', '14', '89', '9', '8', '11', '1603', '1635', '1633', '1632', '1631', '1674', '1672'], // permanent exhibitions
      //   ...['1615', '1611'], // vzdelavacie programy s vyplnenym Datumom do
      // ].includes(page.id)
    ) {
      continue
    }

    const { dateFrom, dateTo, slug, subtitle } = page.attributes ?? {}

    const tags = page.attributes?.tags?.data.map((tag) => tag.id).filter(isDefined) ?? []
    const tagTitles = page.attributes?.tags?.data.map((tag) => tag.attributes?.title).filter(isDefined) ?? []
    const tagSlugs = page.attributes?.tags?.data.map((tag) => tag.attributes?.slug).filter(isDefined) ?? []

    const foundProgram = instersect(tags, programTagIds)
    const foundExplore = instersect(tags, exploreTagIds)

    // Pages, that contain both program and explore tags
    // if (foundProgram && foundExplore) {
    //   console.log(page.id, slug, JSON.stringify(tagSlugs))
    // }

    // Program pages that have just one DateFrom or DateTo
    // if ((dateFrom || dateTo) && !(dateFrom && dateTo) && foundProgram) {
    //   console.log(page.id, slug, dateFrom, dateTo, JSON.stringify(tagSlugs))
    // }

    // Other pages that have just one DateFrom or DateTo
    if ((dateFrom || dateTo) && !(dateFrom && dateTo) && !foundProgram) {
      console.log(page.id, slug, dateFrom, dateTo, JSON.stringify(tagSlugs))

      // const newAddedAt = new Date(dateFrom).setHours(10)
      // const data = {
      //   addedAt: new Date(newAddedAt),
      //   dateFrom: null,
      // } as ContentPageInput
      //
      // // console.log(data)
      // const { updateContentPage } = await stagingClient.UpdateContentPage({ id: page.id, data })
      // console.log(updateContentPage?.data)
    }

    // Program pages without dates
    // if (!dateFrom && !dateTo && foundProgram) {
    //   console.log(page.id, slug, dateFrom, dateTo, JSON.stringify(tagSlugs))
    // }

    // if (subtitle?.includes('Vzdelávací program')) {
    //   console.log(page.id, slug, dateFrom, dateTo, JSON.stringify(tagSlugs))
    // }
  }
}

async function tags() {
  const { tags } = await stagingClient.AllTags()

  for (const tag of tags?.data ?? []) {
    if (!tag.id || !tag.attributes) {
      return null
    }

    const { title, tagCategory } = tag.attributes
    const { title: categoryTitle } = tagCategory?.data?.attributes ?? {}

    const newInternalTitle = `${categoryTitle} - ${title}`

    const data = {
      titleInternal: newInternalTitle,
    } as TagInput

    if (categoryTitle) {
      const { updateTag } = await stagingClient.UpdateTag({ id: tag.id, data })

      console.log(updateTag)
    }
  }
}

// sections()
// byPage();
tags()
