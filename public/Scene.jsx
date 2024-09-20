

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model2(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/scene.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="9a6f3d1095564a21a4faed05e5d8189afbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="star_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="star_low_body_0" geometry={nodes.star_low_body_0.geometry} material={materials.body} />
                </group>
                <group name="sun_earning" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="sun_earning_body_0" geometry={nodes.sun_earning_body_0.geometry} material={materials.body} />
                </group>
                <group name="moon_earning" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="moon_earning_body_0" geometry={nodes.moon_earning_body_0.geometry} material={materials.body} />
                </group>
                <group name="Body_low" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="eyelashes_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="eyelashes_low_hair_0" geometry={nodes.eyelashes_low_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="brows_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="brows_low_hair_0" geometry={nodes.brows_low_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="hairbase_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="hairbase_low_hair_0" geometry={nodes.hairbase_low_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="hair_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="hair_low_hair_0" geometry={nodes.hair_low_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="eyeballs_low" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="eyeballs_low_body_0" geometry={nodes.eyeballs_low_body_0.geometry} material={materials.body} />
                </group>
                <group name="BG_moon" position={[0, 13.899, 25.595]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="BG_moon_moon_0" geometry={nodes.BG_moon_moon_0.geometry} material={materials.moon} />
                </group>
                <group name="Gold_low" position={[0, 0, 25.595]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Gold_low_hands-cloth-gold_0" geometry={nodes['Gold_low_hands-cloth-gold_0'].geometry} material={materials['hands-cloth-gold']} />
                </group>
                <group name="BG_moon001" position={[-11.301, 0, -38.212]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={347.637}>
                  <mesh name="BG_moon001_stars_0" geometry={nodes.BG_moon001_stars_0.geometry} material={materials.stars} />
                </group>
                <group name="hair_low001" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="hair_low002" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="hair_low002_hair_0" geometry={nodes.hair_low002_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="hair_low003" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="hair_low004" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="hair_low004_hair_0" geometry={nodes.hair_low004_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="hair_low005" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="hair_low006" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="hair_low006_hair_0" geometry={nodes.hair_low006_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="hair_low007" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="hair_low007_hair_0" geometry={nodes.hair_low007_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="hair_low008" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="hair_low008_hair_0" geometry={nodes.hair_low008_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="hair_low009" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="hair_low009_hair_0" geometry={nodes.hair_low009_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="hair_low010" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="hair_low010_hair_0" geometry={nodes.hair_low010_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="hair_low011" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="hair_low012" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="hair_low013" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="hair_low014" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="hair_low014_hair_0" geometry={nodes.hair_low014_hair_0.geometry} material={materials.hair} />
                </group>
                <group name="Armature" position={[0, 0, 15.642]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_50">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_73" position={[2.252, -140.875, 104.081]} rotation={[-1.558, 0.202, -0.044]} scale={39.049} />
                    <skinnedMesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials['hands-cloth-gold']} skeleton={nodes.Object_74.skeleton} />
                  </group>
                </group>
                <group name="hand_rigged" position={[2.252, -140.875, 104.081]} rotation={[-1.558, 0.202, -0.044]} scale={39.049} />
                <group name="cloth" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="cloth_hands-cloth-gold_0" geometry={nodes['cloth_hands-cloth-gold_0'].geometry} material={materials['hands-cloth-gold']} />
                </group>
                <group name="smoke" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="smoke_smoke_0" geometry={nodes.smoke_smoke_0.geometry} material={materials.smoke} />
                </group>
                <group name="strand1_rig" position={[-96.322, 41.395, 5.327]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_81">
                    <primitive object={nodes._rootJoint_1} />
                    <group name="Object_83" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.hair} skeleton={nodes.Object_84.skeleton} />
                  </group>
                </group>
                <group name="strand2_rig" position={[-24.795, 57.592, 36.73]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_96">
                    <primitive object={nodes._rootJoint_2} />
                    <group name="Object_98" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials.hair} skeleton={nodes.Object_99.skeleton} />
                  </group>
                </group>
                <group name="strand3_rig" position={[-21.497, 19.072, 54.543]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_109">
                    <primitive object={nodes._rootJoint_3} />
                    <group name="Object_111" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials.hair} skeleton={nodes.Object_112.skeleton} />
                  </group>
                </group>
                <group name="strand4_rig" position={[57.555, 103.776, -38.133]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_122">
                    <primitive object={nodes._rootJoint_4} />
                    <group name="Object_124" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_125" geometry={nodes.Object_125.geometry} material={materials.hair} skeleton={nodes.Object_125.skeleton} />
                  </group>
                </group>
                <group name="strand5_rig" position={[-26.294, 138.941, -6.943]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_137">
                    <primitive object={nodes._rootJoint_5} />
                    <group name="Object_139" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_140" geometry={nodes.Object_140.geometry} material={materials.hair} skeleton={nodes.Object_140.skeleton} />
                  </group>
                </group>
                <group name="strand6_rig" position={[-4.318, 4.614, 57.618]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_153">
                    <primitive object={nodes._rootJoint_6} />
                    <group name="Object_155" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials.hair} skeleton={nodes.Object_156.skeleton} />
                  </group>
                </group>
                <group name="lashes" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="lashes_body_0" geometry={nodes.lashes_body_0.geometry} material={materials.body} />
                </group>
                <group name="Body_rig" position={[0, -188.025, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_169">
                    <primitive object={nodes._rootJoint_7} />
                    <group name="Object_171" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.body} skeleton={nodes.Object_172.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
