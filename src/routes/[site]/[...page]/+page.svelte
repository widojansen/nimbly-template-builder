<script>
  import { PrimoPage } from '@widojansen/builder'

  export let data
</script>

<PrimoPage
  page={{
    ...data.page,
    sections: data.sections,
  }}
/>
