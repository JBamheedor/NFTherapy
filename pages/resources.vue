<template>
  <section class="about">
    <ImageHero :main-title="pageTitle" :style="{ 'background-image': 'url(' + backgroundImage + ')' }" />
    <div class="about__content-container" />
    <content-section :section-title="contentSection1.title">
      <p>Forest Therapy "is a research-based framework for supporting healing and wellness through immersion in forests and other natural environments.” Studies show multiple benefits from a relationship with nature, from boosted immunity to improved mood.</p>
    </content-section>
    <h2 class="section-heading">
      Useful sites
    </h2>
    <div class="resource-links max">
      <resource-link v-for="item in resourceList" :key="item.index" :link="item.link" :icon-class="item.iconClass" :link-title="item.linkTitle" />
    </div>
    <h2 class="section-heading">
      Books
    </h2>
    <div class="bookList max">
      <ul>
        <li class="bookList__item">
          <i class="fas fa-book book" />
          <a class="bookList__item-link" target="_blank" href="https://www.amazon.com/gp/product/161620141X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=161620141X&linkCode=as2&tag=nft07-20&linkId=cb910322fdcb432af83b903900183b39">The Nature Principle: Reconnecting with Life in a Virtual Age</a><img
            src="//ir-na.amazon-adsystem.com/e/ir?t=nft07-20&l=am2&o=1&a=161620141X"
            width="1"
            height="1"
            border="0"
            alt=""
            style="border:none !important; margin:0px !important;"
          >
        </li>
        <li class="bookList__item">
          <i class="fas fa-book book" />
          <a class="bookList__item-link" target="_blank" href="https://www.amazon.com/gp/product/0393355578/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0393355578&linkCode=as2&tag=nft07-20&linkId=8bd35e5c8d873e0c03526f60d711dd93">The Nature Fix: Why Nature Makes Us Happier, Healthier, and More Creative</a><img
            src="//ir-na.amazon-adsystem.com/e/ir?t=nft07-20&l=am2&o=1&a=0393355578"
            width="1"
            height="1"
            border="0"
            alt=""
            style="border:none !important; margin:0px !important;"
          >
        </li>
      </ul>
      <div class="affliate">
        <p>Disclosure: Some of the links are affliate links, meaning at no additional cost to you, I may earn a commission if you click through and make a purchase.</p>
      </div>
    </div>
  </section>
</template>

<script>
import ImageHero from '@/components/ImageHero.vue'
import ContentSection from '@/components/ContentSection.vue'
import ResourceLink from '@/components/ResourceLink.vue'

export default {
  components: {
    ImageHero,
    ContentSection,
    ResourceLink
  },
  head() {
    return {
      title: 'Resources | Forest Therapy Nashville',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Forest Therapy research is increasing in quantity all the time. Begun mostly in Japan and Korea, many studies have been conducted surrounding spending time in nature and our health and well-being. Books on Forest Therapy, nature connection, and studies on nature and attention span, are referenced here.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.backgroundImage
        }
      ]
    }
  },
  transition: 'fadeOpacity',
  data() {
    return {
      pageTitle: 'Resources',
      backgroundImage: '/images/resources-wood-hero.jpg',
      contentSection1: {
        title: 'Further Information'
      },
      resourceList: [
        {
          link: 'https://www.natureandforesttherapy.org/about/science',
          iconClass: 'fas fa-circle',
          linkTitle: 'The Science'
        },
        {
          link:
            'https://www.livestrong.com/article/32762-spiritually-cleanse-yourself/',
          iconClass: 'fas fa-circle',
          linkTitle: 'What is Forest Therapy and How Do You Do It'
        },
        {
          link:
            'https://thebolditalic.com/i-went-to-a-forest-therapy-session-and-it-wasnt-weird-at-all-fbd91092bd01',
          iconClass: 'fas fa-circle',
          linkTitle:
            "I Went to a Forest Therapy Session and It Wasn't Weird at All"
        },
        {
          link:
            'https://www.theatlantic.com/health/archive/2017/06/forest-bathing/532068/',
          iconClass: 'fas fa-circle',
          linkTitle: 'How Microdosing on Nature Can Help You with Stress'
        },
        {
          link:
            'https://www.outsideonline.com/1870381/take-two-hours-pine-forest-and-call-me-morning',
          iconClass: 'fas fa-circle',
          linkTitle: 'Take Two Hours of Pine Forest and Call Me in the Morning'
        },
        {
          link:
            'https://aeon.co/essays/why-forests-and-rivers-are-the-most-potent-health-tonic-around',
          iconClass: 'fas fa-circle',
          linkTitle: 'The Healing Power of Nature'
        }
      ],
      bookList: [
        {
          title: 'The Nature Principle, by Richard Louv'
        },
        {
          title: 'The Nature Fix, by Florence Williams'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.bookList,
.resource-links {
  margin: 0 auto;
  padding: 0 6% 4rem;
  max-width: 40rem;

  &__item {
    margin: 0.5rem 0;

    &-link {
      color: #4a4a4a;
      &:hover {
        color: $dark-green;
      }
    }
  }
}
.bookList__itm .book {
  margin-right: 0.5rem;
  color: $primary-green;
}

svg {
  color: $primary-green;
  margin-right: 0.5rem;
}
.resource-link {
  margin: 0.5rem 0;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}

.affliate {
  font-size: 12px;
  font-style: italic;
  padding-top: 4rem;
}
</style>
