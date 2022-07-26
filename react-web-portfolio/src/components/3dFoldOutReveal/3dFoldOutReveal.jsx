import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './index.css';

export const FoldOutReveal = () => {

    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        handleOpenFold()
    }, [clicks])

    const handleOpenFold = () => {
        let zindex = 0;
        $("div.card").on('click', function (e) {
            e.preventDefault();
            var isShowing = false;
            if ($(this).hasClass("show")) isShowing = true

            if ($("div.cards").hasClass("showing")) {
                $("div.card.show").removeClass("show");
                if (isShowing) $("div.cards").removeClass("showing");
                else $(this).css({ zIndex: zindex }).addClass("show");
                zindex++;
            } else {
                $("div.cards").addClass("showing");
                $(this).css({ zIndex: zindex }).addClass("show");
                zindex++;
            }
            setClicks(clicks++);
        });
    }

    return (
        <div class="cards">
            <div class="card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
                </div>
                <div class="card-title">
                    <a href="#" class="toggle-info btn">
                        <span class="left"></span>
                        <span class="right"></span>
                    </a>
                    <h2>
                        Card title 2
                        <small>Image from unsplash.com</small>
                    </h2>
                </div>
                <div class="card-flap flap1" >
                    <div class="card-description">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                    </div>
                    <div class="card-flap flap2">
                        <div class="card-actions">
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
                </div>
                <div class="card-title">
                    <a href="#" class="toggle-info btn">
                        <span class="left"></span>
                        <span class="right"></span>
                    </a>
                    <h2>
                        Card title 2
                        <small>Image from unsplash.com</small>
                    </h2>
                </div>
                <div class="card-flap flap1" >
                    <div class="card-description">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                    </div>
                    <div class="card-flap flap2">
                        <div class="card-actions">
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
                </div>
                <div class="card-title">
                    <a href="#" class="toggle-info btn">
                        <span class="left"></span>
                        <span class="right"></span>
                    </a>
                    <h2>
                        Card title
                        <small>Image from unsplash.com</small>
                    </h2>
                </div>
                <div class="card-flap flap1">
                    <div class="card-description">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                    </div>
                    <div class="card-flap flap2">
                        <div class="card-actions">
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
                </div>
                <div class="card-title">
                    <a href="#" class="toggle-info btn">
                        <span class="left"></span>
                        <span class="right"></span>
                    </a>
                    <h2>
                        Card title
                        <small>Image from unsplash.com</small>
                    </h2>
                </div>
                <div class="card-flap flap1">
                    <div class="card-description">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                    </div>
                    <div class="card-flap flap2">
                        <div class="card-actions">
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
                </div>
                <div class="card-title">
                    <a href="#" class="toggle-info btn">
                        <span class="left"></span>
                        <span class="right"></span>
                    </a>
                    <h2>
                        Card title
                        <small>Image from unsplash.com</small>
                    </h2>
                </div>
                <div class="card-flap flap1">
                    <div class="card-description">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                    </div>
                    <div class="card-flap flap2">
                        <div class="card-actions">
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
                </div>
                <div class="card-title">
                    <a href="#" class="toggle-info btn">
                        <span class="left"></span>
                        <span class="right"></span>
                    </a>
                    <h2>
                        Card title
                        <small>Image from unsplash.com</small>
                    </h2>
                </div>
                <div class="card-flap flap1">
                    <div class="card-description">
                        This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                    </div>
                    <div class="card-flap flap2">
                        <div class="card-actions">
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}