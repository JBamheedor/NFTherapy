<template>
  <div class="infoColumns">
    <div class="infoColumns__container max">
      <div class="columns">
        <info-column :link="col1.link" :col-header="col1.title" :col-body="col1.body">
          <template v-slot:icon>
            <i class="fas fa-seedling" />
          </template>
        </info-column>
        <info-column :link="col2.link" :col-header="col2.title" :col-body="col2.body">
          <template v-slot:icon>
            <i class="fas fa-walking" />
          </template>
        </info-column>
        <info-column :link="col3.link" :col-header="col3.title" :col-body="col3.body">
          <template v-slot:icon>
            <i class="fas fa-plus" />
          </template>
        </info-column>
      </div>
    </div>
  </div>
</template>

<script>
import InfoColumn from '@/components/InfoColumn.vue'

export default {
  components: {
    InfoColumn
  },
  data() {
    return {
      col1: {
        title: 'Resources',
        body:
          'Studies show a reduction in cortisol, blood pressure, and even experiencing “Attention Restoration” after forest bathing.',
        link: '/resources'
      },
      col2: {
        title: 'Upcoming Walks',
        body:
          'Forest Bathing for Beginners @Cheekwood every Wednesday in August 9:30 - 10:30 am',
        link: '/walks'
      },
      col3: {
        title: 'About',
        body: 'Meet your guide and read some frequently asked questions.',
        link: '/about'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.infoColumns {
  background: $light-green;
  overflow: hidden;
  margin: 0 auto 2rem;
  padding: 2rem 6% 0;

  .columns {
    margin: 0;
    padding-bottom: 2rem;
  }

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid $light-green;
    transform: translate(-50%, 0%);
  }
}
</style>
