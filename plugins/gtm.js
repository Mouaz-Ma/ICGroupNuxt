export default function({ $gtm, route }) {
    $gtm.init('GTM-'+process.env.GOOGLE_TAG_MANAGER_ID)
  }