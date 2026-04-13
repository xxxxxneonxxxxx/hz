import { FOOTER_BOTTOM, FOOTER_COLUMNS, FOOTER_LOGO } from '../config/footer.config.js'

export function useFooterModel() {
  return {
    logo: FOOTER_LOGO,
    columns: FOOTER_COLUMNS,
    bottom: FOOTER_BOTTOM,
  }
}
