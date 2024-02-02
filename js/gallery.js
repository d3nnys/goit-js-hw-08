'use strict';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const portfolio = document.querySelector('.gallery');
portfolio.innerHTML = createImages(images);

function createImages({ preview, original, description }) {
  const elements = `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
         <img
          class="gallery-image"
           src="${preview}"
           data-source="${original}"
            alt="${description}"
          />
      </a>
    </li>`;

  return elements;
}

let currentModal = '';

for (let image of images) {
  currentModal += createImages(image);
}

portfolio.innerHTML = currentModal;

const items = document.querySelectorAll('.gallery-item');

items.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();

    const imageSource =
      event.currentTarget.querySelector('.gallery-image').dataset.source;
    console.log(imageSource);

    let currentImage = images.find(item => item.original == imageSource);
    console.log(currentImage);

    currentModal = `
      <li class="gallery-item">
        <img
          class="gallery-image"
          src="${currentImage.original}"
          alt="${currentImage.description}"
        />
      </li>`;

    currentModal = basicLightbox.create(currentModal, {
      onShow: instance => {
        instance
          .element()
          .querySelector('.gallery-image')
          .addEventListener('click', () => {
            instance.close();
          });
      },
    });

    currentModal.show();
  });
});

document.addEventListener('keydown', ({ code }) => {
  if (code !== 'Escape') {
    return;
  }

  currentModal.close();
});
