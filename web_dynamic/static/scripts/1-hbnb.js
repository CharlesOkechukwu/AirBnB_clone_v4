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
});
