mod utils;

use wasm_bindgen::prelude::*;
use bevy::{input::touch::*, prelude::*};
use bevy::window::{PrimaryWindow, WindowResolution};



#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {

    //alert("Hello, touchies!");
    main();
}

pub fn main() {
    App::new()
        .add_plugins(DefaultPlugins.set(WindowPlugin {
            primary_window: Some(Window {
                canvas: Some("#canvas".to_string()),
                resolution: WindowResolution::from((256.0, 256.0)),
                ..default()
            }),
            ..default()
        }))
        .add_system(touch_system)
        .add_system(mouse_button_input)
        .run();
}
fn touch_system(touches: Res<Touches>) {
    for touch in touches.iter_just_pressed() {
        alert(format!(
            "just pressed touch with id: {:?}, at: {:?}",
            touch.id(),
            touch.position()
        ).as_str());
    }
}

fn mouse_button_input(
    buttons: Res<Input<MouseButton>>,
    q_windows: Query<&Window, With<PrimaryWindow>>,
) {
    if let Some(position) = q_windows.single().cursor_position() {
        for button in buttons.get_just_pressed() {
            alert(format!("{:?} was clicked", position).as_str());
        }
    }

}