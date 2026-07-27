import {type SchemaTypeDefinition} from 'sanity'
import {update} from './update'
import {galleryItem} from './galleryItem'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [update, galleryItem],
}