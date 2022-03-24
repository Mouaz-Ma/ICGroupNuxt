<template>
<div data-app>

  <ClientOnly>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify v-model="content" :extensions="extensions"  @input="$emit('input', arguments[0])" />

    <template #placeholder>
      Loading...
    </template>
  </ClientOnly>
</div>
</template>

<script scoped>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image
} from 'tiptap-vuetify'

export default {
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3, 4]
          }
        }
      ],
      Bold,
      Link,
      HorizontalRule,
      Paragraph,
      HardBreak,
      Image
    ],
    // starting editor's content
    content: 'Start your Blog here'
  }),
  methods:{
  }
  
}
</script>
