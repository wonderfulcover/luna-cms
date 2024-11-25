import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { structure } from './sanity-structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'client-luna',

  projectId: '6a4mv01e',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }), 
    visionTool()],

  schema: {
    types: schemaTypes,
  },
})
