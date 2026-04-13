import { useEffect } from 'react'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

function FitBounds({ businesses, center, zoom }) {
  const map = useMap()

  useEffect(() => {
    const points = businesses
      .filter((business) => business.coordenadas?.lat && business.coordenadas?.lng)
      .map((business) => [business.coordenadas.lat, business.coordenadas.lng])

    if (points.length > 1) {
      map.fitBounds(points, { padding: [40, 40] })
      return
    }

    map.setView([center.lat, center.lng], zoom)
  }, [businesses, center.lat, center.lng, map, zoom])

  return null
}

function createMarker(category) {
  const label = category?.charAt(0)?.toUpperCase() ?? 'E'

  return L.divIcon({
    className: 'business-map-marker',
    html: `<div class="business-map-pin"><span>${label}</span></div>`,
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -36],
  })
}

export function BusinessMap({ mapConfig, businesses, whatsappLabel }) {
  return (
    <div className="rounded-[32px] border border-white/60 bg-white/65 p-5 shadow-[0_30px_90px_-45px_rgba(26,72,167,0.35)] backdrop-blur-2xl sm:p-8">
      <div className="mb-6 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          {mapConfig.badge}
        </p>
        <h3 className="mt-2 text-3xl font-semibold text-slate-950 sm:text-4xl">
          {mapConfig.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {mapConfig.description}
        </p>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-white/70 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)]">
        <MapContainer
          center={[mapConfig.center.lat, mapConfig.center.lng]}
          zoom={mapConfig.zoom}
          scrollWheelZoom={false}
          className="h-[420px] w-full"
        >
          <TileLayer attribution={mapConfig.tileAttribution} url={mapConfig.tileUrl} />
          <FitBounds businesses={businesses} center={mapConfig.center} zoom={mapConfig.zoom} />

          {businesses.map((business) => (
            <Marker
              key={business.nombre}
              position={[business.coordenadas.lat, business.coordenadas.lng]}
              icon={createMarker(business.categoria)}
            >
              <Popup>
                <div className="min-w-52 space-y-2 text-sm text-slate-700">
                  <div>
                    <p className="text-base font-semibold text-slate-950">{business.nombre}</p>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
                      {business.categoria}
                    </p>
                  </div>
                  <p>{business.descripcion}</p>
                  <p className="font-medium text-slate-900">{business.direccion}</p>
                  <a
                    href={`https://wa.me/${business.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-600"
                  >
                    {whatsappLabel}
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}