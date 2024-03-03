$('document').ready(function () {
  const amenities = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenities).join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  const url = 'http://0.0.0.0:5001/api/v1/places_search/';
  $.post(url,
    {},
    function (data) {
      for (const place in data) {
        const template = `<article>
        <div class="title">
         <h2>${place.name}</h2>
         <div class="price_by_night">
         ${place.price_by_night}
         </div>
        </div>
        <div class="information">
         <div class="max_guest">
         ${place.number_rooms} Bedrooms
         </div>
         <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
        </div>
        <div class="description">
         ${place.description}
        </div>
        </article>`;
        $('section.places').append(template);
      }
    },
    'application/json');
});
