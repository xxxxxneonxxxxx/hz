import { OSNOVY_PRODYUSIROVANIYA_CONFIG } from './osnovy-prodyusirovaniya.config.js'
import { REZHISSURA_IGROVOGO_KINO_CONFIG } from './rezhissura-igrovogo-kino.config.js'
import { SCENARNOE_MASTERSTVO_CONFIG } from './scenarnoe-masterstvo.config.js'

export const HOME_DETAILS_PAGE = {
  ...SCENARNOE_MASTERSTVO_CONFIG,
  ...REZHISSURA_IGROVOGO_KINO_CONFIG,
  ...OSNOVY_PRODYUSIROVANIYA_CONFIG,
}
