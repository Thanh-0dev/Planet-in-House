import React from 'react'
import styled from 'styled-components'
import { Story } from '@storybook/react'

import defaultExport from '../../../.storybook/config/defaultExport'

import Planet from '.'
import { PlanetCardProps, Planets } from './types'

export default defaultExport({
  title: 'Components/PlanetCard',
  component: Planet,
  viewport: null,
  containerStyle: { padding: '3rem' },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(Planets),
      },
    },
    width: {
      control: {
        type: 'range',
        step: 2,
        min: 15,
        max: 200,
      },
    },
  },
})

// ALL

const ListSC = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ListItemSC = styled.div<{ width: number }>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: ${({ width }) => `${width + 80}px`};
  margin-bottom: 30px;

  p {
    font-size: 13px;
    font-family: sans-serif;
    text-align: center;
    margin-top: 15px;
  }
`

const PlanetCardSC = styled(Planet)<{ width: number }>`
  width: ${({ width }) => width}px;
`

export const All: Story<PlanetCardProps & { width: number }> = (arg) => {
  return (
    <ListSC>
      {Object.keys(Planets).map((key) => (
        <ListItemSC key={key} width={arg.width}>
          <PlanetCardSC
            key={key}
            {...arg}
            planet={{
              englishName: Planets[key as Planets],
              name: Planets[key as Planets],
              id: Planets[key as Planets].toLocaleLowerCase(),
            }}
          />
          <p>{key}</p>
        </ListItemSC>
      ))}
    </ListSC>
  )
}

All.args = {
  width: 42,
}

All.argTypes = {
  planet: {
    table: {
      disable: true,
    },
  },
}

// SIMPLE

export const Simple: Story<PlanetCardProps & { width: number }> = (arg) => <PlanetCardSC {...arg} />

Simple.args = {
  planet: {
    englishName: 'Mercury',
    name: 'Mercure',
    id: 'mercure',
  },
}

Simple.parameters = {
  layout: 'centered',
}
