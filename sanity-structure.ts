import type { StructureResolver } from 'sanity/structure';
import JsonView from './previews'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Landing Page')
        .schemaType('landing')
        .child(
          S.document()
            .schemaType('landing')
            .documentId('landing')
            .views([
              S.view.form(),
              S.view
                .component(JsonView as any)
                .title('JSON View'),
            ])
        ),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'landing'),
    ]);
